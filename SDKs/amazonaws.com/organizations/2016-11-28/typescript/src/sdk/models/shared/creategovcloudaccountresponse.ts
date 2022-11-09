import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateAccountStatus } from "./createaccountstatus";


export class CreateGovCloudAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateAccountStatus" })
  createAccountStatus?: CreateAccountStatus;
}
