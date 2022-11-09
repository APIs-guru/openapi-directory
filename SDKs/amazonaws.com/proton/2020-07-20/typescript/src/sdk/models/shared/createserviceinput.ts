import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateServiceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=repositoryConnectionArn" })
  repositoryConnectionArn?: string;

  @Metadata({ data: "json, name=repositoryId" })
  repositoryId?: string;

  @Metadata({ data: "json, name=spec" })
  spec: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion: string;

  @Metadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
