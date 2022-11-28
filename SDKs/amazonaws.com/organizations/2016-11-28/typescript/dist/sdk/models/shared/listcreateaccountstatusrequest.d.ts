import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountStateEnum } from "./createaccountstateenum";
export declare class ListCreateAccountStatusRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    states?: CreateAccountStateEnum[];
}
