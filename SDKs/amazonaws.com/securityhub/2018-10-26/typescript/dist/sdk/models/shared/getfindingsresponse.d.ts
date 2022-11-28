import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFinding } from "./awssecurityfinding";
export declare class GetFindingsResponse extends SpeakeasyBase {
    findings: AwsSecurityFinding[];
    nextToken?: string;
}
