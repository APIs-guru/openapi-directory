import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
**/
export declare class DbParameterGroup extends SpeakeasyBase {
    dbParameterGroupArn?: string;
    dbParameterGroupFamily?: string;
    dbParameterGroupName?: string;
    description?: string;
}
