import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedOperationEnum } from "./allowedoperationenum";
import { GrantStatusEnum } from "./grantstatusenum";



export class CreateGrantVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedOperations" })
  allowedOperations?: AllowedOperationEnum[];

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=GrantArn" })
  grantArn: string;

  @SpeakeasyMetadata({ data: "json, name=GrantName" })
  grantName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceVersion" })
  sourceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: GrantStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;
}
