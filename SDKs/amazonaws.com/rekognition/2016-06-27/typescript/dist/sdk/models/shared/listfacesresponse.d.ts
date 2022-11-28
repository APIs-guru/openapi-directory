import { SpeakeasyBase } from "../../../internal/utils";
import { Face } from "./face";
export declare class ListFacesResponse extends SpeakeasyBase {
    faceModelVersion?: string;
    faces?: Face[];
    nextToken?: string;
}
