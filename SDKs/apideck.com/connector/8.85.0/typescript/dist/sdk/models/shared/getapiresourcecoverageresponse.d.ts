import { SpeakeasyBase } from "../../../internal/utils";
import { ApiResourceCoverage } from "./apiresourcecoverage";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetApiResourceCoverageResponse extends SpeakeasyBase {
    data: ApiResourceCoverage;
    links?: Links;
    meta?: Meta;
    status: string;
    statusCode: number;
}
