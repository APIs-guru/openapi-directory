import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicepacksResponse extends SpeakeasyBase {
    contentType: string;
    servicepacks?: shared.Servicepack[];
    statusCode: number;
}
