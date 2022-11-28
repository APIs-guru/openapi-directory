import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountStatus } from "./createaccountstatus";



export class ListCreateAccountStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateAccountStatuses", elemType: CreateAccountStatus })
  createAccountStatuses?: CreateAccountStatus[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
