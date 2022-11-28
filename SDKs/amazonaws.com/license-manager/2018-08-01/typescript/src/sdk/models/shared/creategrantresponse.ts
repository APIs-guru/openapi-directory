import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrantStatusEnum } from "./grantstatusenum";



export class CreateGrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantArn" })
  grantArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: GrantStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
