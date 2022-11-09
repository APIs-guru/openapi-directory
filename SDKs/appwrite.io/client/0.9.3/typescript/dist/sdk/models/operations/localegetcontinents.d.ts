import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocaleGetContinentsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class LocaleGetContinentsRequest extends SpeakeasyBase {
    security: LocaleGetContinentsSecurity;
}
export declare class LocaleGetContinentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    continentList?: shared.ContinentList;
}
