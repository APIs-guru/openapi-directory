import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateAccountStatus } from "./createaccountstatus";


export class ListCreateAccountStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateAccountStatuses", elemType: shared.CreateAccountStatus })
  createAccountStatuses?: CreateAccountStatus[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
