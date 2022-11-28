import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountStatus } from "./createaccountstatus";



export class CreateGovCloudAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateAccountStatus" })
  createAccountStatus?: CreateAccountStatus;
}
