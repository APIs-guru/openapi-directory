import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSectionRequest extends SpeakeasyBase {
    pathParams: GetSectionPathParams;
}
export declare class GetSectionResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    sectionResponse?: shared.SectionResponse;
    statusCode: number;
}
