import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A custom key-value pair associated with a resource within your organization.</p> <p>You can attach tags to any of the following organization resources.</p> <ul> <li> <p>AWS account</p> </li> <li> <p>Organizational unit (OU)</p> </li> <li> <p>Organization root</p> </li> <li> <p>Policy</p> </li> </ul>
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
