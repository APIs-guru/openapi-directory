import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3LogDelivery
/** 
 * Details about delivering logs to Amazon S3.
**/
export class S3LogDelivery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}
