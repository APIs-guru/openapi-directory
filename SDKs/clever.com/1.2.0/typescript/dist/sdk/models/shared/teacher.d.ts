import { SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
import { Name } from "./name";
export declare class Teacher extends SpeakeasyBase {
    created?: string;
    credentials?: Credentials;
    district?: string;
    email?: string;
    id?: string;
    lastModified?: string;
    name?: Name;
    school?: string;
    schools?: string[];
    sisId?: string;
    stateId?: string;
    teacherNumber?: string;
    title?: string;
}
