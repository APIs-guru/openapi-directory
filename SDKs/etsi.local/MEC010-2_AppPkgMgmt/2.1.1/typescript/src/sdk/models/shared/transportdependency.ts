import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransportDescriptor } from "./transportdescriptor";



export class TransportDependency extends SpeakeasyBase {
  @SpeakeasyMetadata()
  labels: string[];

  @SpeakeasyMetadata()
  serializers: string[];

  @SpeakeasyMetadata()
  transport: TransportDescriptor;
}
