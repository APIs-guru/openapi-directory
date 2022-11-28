import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticIp } from "./elasticip";
/**
 * Contains the response to a <code>DescribeElasticIps</code> request.
**/
export declare class DescribeElasticIpsResult extends SpeakeasyBase {
    elasticIps?: ElasticIp[];
}
