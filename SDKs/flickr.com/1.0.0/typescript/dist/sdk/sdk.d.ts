import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.flickr.com/services"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getRestMethodEqualFlickrGroupsPoolsGetContext - Returns next and previous photos for a photo in a group pool
    **/
    getRestMethodEqualFlickrGroupsPoolsGetContext(req: operations.GetRestMethodEqualFlickrGroupsPoolsGetContextRequest, config?: AxiosRequestConfig): Promise<operations.GetRestMethodEqualFlickrGroupsPoolsGetContextResponse>;
    /**
     * echo - Echos the input parameters back in the response
    **/
    echo(req: operations.EchoRequest, config?: AxiosRequestConfig): Promise<operations.EchoResponse>;
    /**
     * getAccessToken - Returns an access token
    **/
    getAccessToken(req: operations.GetAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAccessTokenResponse>;
    /**
     * getAlbumById - Returns a list of photos in an album.
    **/
    getAlbumById(req: operations.GetAlbumByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumByIdResponse>;
    /**
     * getAlbumContextById - Returns next and previous photos for a photo in a set
    **/
    getAlbumContextById(req: operations.GetAlbumContextByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumContextByIdResponse>;
    /**
     * getAlbumsByPersonId - Returns the albums belonging to the specified user
    **/
    getAlbumsByPersonId(req: operations.GetAlbumsByPersonIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumsByPersonIdResponse>;
    /**
     * getFavoritesByPersonId - Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.
    **/
    getFavoritesByPersonId(req: operations.GetFavoritesByPersonIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFavoritesByPersonIdResponse>;
    /**
     * getFavoritesContextById - Returns next and previous favorites for a photo in a user's favorites
    **/
    getFavoritesContextById(req: operations.GetFavoritesContextByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFavoritesContextByIdResponse>;
    /**
     * getGalleryPhotosById - Returns a list of photos in a gallery.
    **/
    getGalleryPhotosById(req: operations.GetGalleryPhotosByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGalleryPhotosByIdResponse>;
    /**
     * getGroupById - Get information about a group
    **/
    getGroupById(req: operations.GetGroupByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupByIdResponse>;
    /**
     * getGroupDiscussionsById - Get a list of discussion topics in a group.
    **/
    getGroupDiscussionsById(req: operations.GetGroupDiscussionsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupDiscussionsByIdResponse>;
    /**
     * getGroupPhotosById - Returns a list of pool photos for a given group
    **/
    getGroupPhotosById(req: operations.GetGroupPhotosByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupPhotosByIdResponse>;
    /**
     * getGroupTopicById - Get information about a group discussion topic
    **/
    getGroupTopicById(req: operations.GetGroupTopicByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupTopicByIdResponse>;
    /**
     * getGroupTopicRepliesById - Get information on a group topic reply
    **/
    getGroupTopicRepliesById(req: operations.GetGroupTopicRepliesByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupTopicRepliesByIdResponse>;
    /**
     * getLicenseById - Fetches a list of available photo licenses for Flickr
    **/
    getLicenseById(req: operations.GetLicenseByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseByIdResponse>;
    /**
     * getMediaByPersonId - Return photos from the given user's photostream
    **/
    getMediaByPersonId(req: operations.GetMediaByPersonIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMediaByPersonIdResponse>;
    /**
     * getMediaBySearch - Return a list of photos matching some criteria.
    **/
    getMediaBySearch(req: operations.GetMediaBySearchRequest, config?: AxiosRequestConfig): Promise<operations.GetMediaBySearchResponse>;
    /**
     * getPersonById - Returns a person
    **/
    getPersonById(req: operations.GetPersonByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonByIdResponse>;
    /**
     * getPhotoById - Returns a photo
    **/
    getPhotoById(req: operations.GetPhotoByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPhotoByIdResponse>;
    /**
     * getPhotoExifById - Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.
    **/
    getPhotoExifById(req: operations.GetPhotoExifByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPhotoExifByIdResponse>;
    /**
     * getPhotoSizesById - Returns photo sizes
    **/
    getPhotoSizesById(req: operations.GetPhotoSizesByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPhotoSizesByIdResponse>;
    /**
     * getPhotolistContextById - Returns next and previous photos in a photo list
    **/
    getPhotolistContextById(req: operations.GetPhotolistContextByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPhotolistContextByIdResponse>;
    /**
     * getPhotostreamContextById - Returns next and previous photos for a photo in a photostream
    **/
    getPhotostreamContextById(req: operations.GetPhotostreamContextByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPhotostreamContextByIdResponse>;
    /**
     * getRequestToken - Returns an oauth token and oauth token secret
    **/
    getRequestToken(req: operations.GetRequestTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestTokenResponse>;
    /**
     * uploadPhoto - Uploads a new photo to Flickr
    **/
    uploadPhoto(req: operations.UploadPhotoRequest, config?: AxiosRequestConfig): Promise<operations.UploadPhotoResponse>;
}
export {};
