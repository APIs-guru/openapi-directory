import { SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
import { Name } from "./name";
export declare class SchoolAdmin extends SpeakeasyBase {
    credentials?: Credentials;
    district?: string;
    email?: string;
    id?: string;
    name?: Name;
    schools?: string[];
    staffId?: string;
    title?: string;
}
