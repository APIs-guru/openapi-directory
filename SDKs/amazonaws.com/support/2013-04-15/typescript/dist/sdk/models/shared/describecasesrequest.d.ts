import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DescribeCasesRequest extends SpeakeasyBase {
    afterTime?: string;
    beforeTime?: string;
    caseIdList?: string[];
    displayId?: string;
    includeCommunications?: boolean;
    includeResolvedCases?: boolean;
    language?: string;
    maxResults?: number;
    nextToken?: string;
}
