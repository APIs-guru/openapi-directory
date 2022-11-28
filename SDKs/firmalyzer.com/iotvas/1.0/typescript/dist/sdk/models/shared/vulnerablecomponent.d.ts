import { SpeakeasyBase } from "../../../internal/utils";
import { Vulnerability } from "./vulnerability";
export declare class VulnerableComponent extends SpeakeasyBase {
    category?: string;
    cvssMax?: number;
    name?: string;
    version?: string;
    vulnerabilities?: Vulnerability[];
}
