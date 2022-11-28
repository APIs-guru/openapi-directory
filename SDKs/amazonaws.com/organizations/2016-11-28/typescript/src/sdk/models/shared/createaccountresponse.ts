import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountStatus } from "./createaccountstatus";



export class CreateAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateAccountStatus" })
  createAccountStatus?: CreateAccountStatus;
}
