import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3LogDeliveryDescription
/** 
 * The description of the details about delivering logs to Amazon S3.
**/
export class S3LogDeliveryDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}
