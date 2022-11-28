import { SpeakeasyBase } from "../../../internal/utils";
import { TokenTypeEnum } from "./tokentypeenum";
export declare class CreateTokenResponse extends SpeakeasyBase {
    token?: string;
    tokenId?: string;
    tokenType?: TokenTypeEnum;
}
