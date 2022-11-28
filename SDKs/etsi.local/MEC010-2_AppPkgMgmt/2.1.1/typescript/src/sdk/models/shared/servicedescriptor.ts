import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransportsSupported } from "./transportssupported";



// ServiceDescriptor
/** 
 * 'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'
**/
export class ServiceDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serCategory?: any;

  @SpeakeasyMetadata()
  serName: string;

  @SpeakeasyMetadata()
  transportsSupported?: TransportsSupported;

  @SpeakeasyMetadata()
  version: string;
}
