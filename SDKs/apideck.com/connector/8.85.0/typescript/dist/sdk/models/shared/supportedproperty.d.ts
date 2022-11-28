import { SpeakeasyBase } from "../../../internal/utils";
export declare class SupportedPropertyChildProperties extends SpeakeasyBase {
    unifiedProperty?: SupportedProperty;
}
export declare class SupportedProperty extends SpeakeasyBase {
    childProperties?: SupportedPropertyChildProperties[];
    unifiedProperty?: string;
}
