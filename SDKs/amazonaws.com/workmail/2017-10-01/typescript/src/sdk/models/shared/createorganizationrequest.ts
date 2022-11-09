import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Domain } from "./domain";


export class CreateOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias: string;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=Domains", elemType: shared.Domain })
  domains?: Domain[];

  @Metadata({ data: "json, name=EnableInteroperability" })
  enableInteroperability?: boolean;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;
}
