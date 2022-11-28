import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdPathParams extends SpeakeasyBase {
    committeeId: string;
}
export declare enum GetCommitteeCommitteeIdCommitteeTypeEnum {
    Unknown = "",
    C = "C",
    D = "D",
    E = "E",
    H = "H",
    I = "I",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    S = "S",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}
export declare enum GetCommitteeCommitteeIdDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare enum GetCommitteeCommitteeIdFilingFrequencyEnum {
    Unknown = "",
    A = "A",
    M = "M",
    N = "N",
    Q = "Q",
    T = "T",
    W = "W",
    MinusA = "-A",
    MinusT = "-T"
}
export declare enum GetCommitteeCommitteeIdOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare class GetCommitteeCommitteeIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeType?: GetCommitteeCommitteeIdCommitteeTypeEnum[];
    cycle?: number[];
    designation?: GetCommitteeCommitteeIdDesignationEnum[];
    filingFrequency?: GetCommitteeCommitteeIdFilingFrequencyEnum[];
    organizationType?: GetCommitteeCommitteeIdOrganizationTypeEnum[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    year?: number[];
}
export declare class GetCommitteeCommitteeIdRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdPathParams;
    queryParams: GetCommitteeCommitteeIdQueryParams;
}
export declare class GetCommitteeCommitteeIdResponse extends SpeakeasyBase {
    committeeDetailPage?: shared.CommitteeDetailPage;
    contentType: string;
    statusCode: number;
}
