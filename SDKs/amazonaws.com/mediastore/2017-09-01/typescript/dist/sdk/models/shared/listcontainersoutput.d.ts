import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
export declare class ListContainersOutput extends SpeakeasyBase {
    containers: Container[];
    nextToken?: string;
}
