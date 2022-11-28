import { SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetApisResponse extends SpeakeasyBase {
    data: Api[];
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}
