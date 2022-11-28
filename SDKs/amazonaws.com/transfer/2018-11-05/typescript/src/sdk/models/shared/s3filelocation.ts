import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3FileLocation
/** 
 * <p>Specifies the details for the file location for the file being used in the workflow. Only applicable if you are using S3 storage.</p> <p> You need to provide the bucket and key. The key can represent either a path or a file. This is determined by whether or not you end the key value with the forward slash (/) character. If the final character is "/", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten. </p> <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder. If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>: each upload overwrites the previous version of the <i>bob</i> file.</p>
**/
export class S3FileLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=Etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionId" })
  versionId?: string;
}
