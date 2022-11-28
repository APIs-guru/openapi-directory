import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DetailScopeEnum {
    Parameter = "Parameter",
    Report = "Report",
    Item = "Item"
}
export declare class Detail extends SpeakeasyBase {
    detail?: string;
    id?: string;
    scope?: DetailScopeEnum;
}
