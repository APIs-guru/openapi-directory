import { SpeakeasyBase } from "../../../internal/utils";
import { FindingsFilterActionEnum } from "./findingsfilteractionenum";
import { FindingCriteria } from "./findingcriteria";
export declare class GetFindingsFilterResponse extends SpeakeasyBase {
    action?: FindingsFilterActionEnum;
    arn?: string;
    description?: string;
    findingCriteria?: FindingCriteria;
    id?: string;
    name?: string;
    position?: number;
    tags?: Map<string, string>;
}
