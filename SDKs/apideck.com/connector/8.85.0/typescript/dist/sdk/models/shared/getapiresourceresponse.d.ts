import { SpeakeasyBase } from "../../../internal/utils";
import { ApiResource } from "./apiresource";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetApiResourceResponse extends SpeakeasyBase {
    data: ApiResource;
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}
