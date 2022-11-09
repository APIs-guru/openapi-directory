import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";
import { GrantStatusEnum } from "./grantstatusenum";


export class CreateGrantVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedOperations" })
  allowedOperations?: AllowedOperationEnum[];

  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=GrantArn" })
  grantArn: string;

  @Metadata({ data: "json, name=GrantName" })
  grantName?: string;

  @Metadata({ data: "json, name=SourceVersion" })
  sourceVersion?: string;

  @Metadata({ data: "json, name=Status" })
  status?: GrantStatusEnum;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;
}
