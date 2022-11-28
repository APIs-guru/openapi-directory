import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServicePerimeterConfig } from "./serviceperimeterconfig";


export enum ServicePerimeterPerimeterTypeEnum {
    PerimeterTypeRegular = "PERIMETER_TYPE_REGULAR",
    PerimeterTypeBridge = "PERIMETER_TYPE_BRIDGE"
}


// ServicePerimeter
/** 
 * `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.
**/
export class ServicePerimeter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=perimeterType" })
  perimeterType?: ServicePerimeterPerimeterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ServicePerimeterConfig;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
