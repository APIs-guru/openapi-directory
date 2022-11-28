import { SpeakeasyBase } from "../../../internal/utils";
import { TransportsSupported } from "./transportssupported";
/**
 * 'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'
**/
export declare class ServiceDescriptor extends SpeakeasyBase {
    serCategory?: any;
    serName: string;
    transportsSupported?: TransportsSupported;
    version: string;
}
