import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountStatus } from "./createaccountstatus";
export declare class ListCreateAccountStatusResponse extends SpeakeasyBase {
    createAccountStatuses?: CreateAccountStatus[];
    nextToken?: string;
}
