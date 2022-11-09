import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";


export class GenerateTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;
}
