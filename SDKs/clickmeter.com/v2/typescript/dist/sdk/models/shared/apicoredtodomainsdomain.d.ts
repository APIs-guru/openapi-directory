import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiCoreDtoDomainsDomainTypeEnum {
    System = "System",
    Go = "Go",
    Dedicated = "Dedicated",
    Personal = "Personal"
}
export declare class ApiCoreDtoDomainsDomain extends SpeakeasyBase {
    custom404?: string;
    customHomepage?: string;
    id?: number;
    name?: string;
    type?: ApiCoreDtoDomainsDomainTypeEnum;
}
