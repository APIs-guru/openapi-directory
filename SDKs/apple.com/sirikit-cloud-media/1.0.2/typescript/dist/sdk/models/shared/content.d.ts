import { SpeakeasyBase } from "../../../internal/utils";
import { ContentAttributes } from "./contentattributes";
export declare class Content extends SpeakeasyBase {
    attributes?: ContentAttributes;
    control?: string;
    identifier: string;
    isLive?: boolean;
    playIndex?: number;
    url?: string;
}
