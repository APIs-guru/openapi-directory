import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTalentQueryParams extends SpeakeasyBase {
    year?: number;
}
export declare class GetTalentRequest extends SpeakeasyBase {
    queryParams: GetTalentQueryParams;
}
export declare class GetTalentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamTalents?: shared.TeamTalent[];
}
