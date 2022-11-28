import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgrammeHighlightsQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    mixin?: string[];
    rights: shared.RightsEnum;
}
export declare class GetProgrammeHighlightsRequest extends SpeakeasyBase {
    queryParams: GetProgrammeHighlightsQueryParams;
}
export declare class GetProgrammeHighlightsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
