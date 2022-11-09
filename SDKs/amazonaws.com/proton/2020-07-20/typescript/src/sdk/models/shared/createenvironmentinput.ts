import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateEnvironmentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environmentAccountConnectionId" })
  environmentAccountConnectionId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protonServiceRoleArn" })
  protonServiceRoleArn?: string;

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
