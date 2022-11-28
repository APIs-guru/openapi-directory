import { SpeakeasyBase } from "../../../internal/utils";
import { S3DestinationConfiguration } from "./s3destinationconfiguration";
/**
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
export declare class DestinationConfiguration extends SpeakeasyBase {
    s3?: S3DestinationConfiguration;
}
