import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { File } from "./file";
export declare class Partner extends SpeakeasyBase {
    company: string;
    contacts?: Contact[];
    createdAt?: Date;
    icon?: File;
    id?: string;
    listed?: string;
    twitter?: string;
    updatedAt?: Date;
    website?: string;
}
