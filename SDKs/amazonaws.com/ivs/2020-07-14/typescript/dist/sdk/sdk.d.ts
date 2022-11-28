import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://ivs.{region}.amazonaws.com", "https://ivs.{region}.amazonaws.com", "http://ivs.{region}.amazonaws.com.cn", "https://ivs.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * batchGetChannel - Performs <a>GetChannel</a> on multiple ARNs simultaneously.
    **/
    batchGetChannel(req: operations.BatchGetChannelRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetChannelResponse>;
    /**
     * batchGetStreamKey - Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.
    **/
    batchGetStreamKey(req: operations.BatchGetStreamKeyRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetStreamKeyResponse>;
    /**
     * createChannel - Creates a new channel and an associated stream key to start streaming.
    **/
    createChannel(req: operations.CreateChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    /**
     * createRecordingConfiguration - <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p> <p> <b>Known issue:</b> In the us-east-1 region, if you use the AWS CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the <code>state</code> of the recording configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)</p> <p> <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.</p>
    **/
    createRecordingConfiguration(req: operations.CreateRecordingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateRecordingConfigurationResponse>;
    /**
     * createStreamKey - <p>Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> <p>Note that <a>CreateChannel</a> creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use <a>DeleteStreamKey</a> and then CreateStreamKey.</p>
    **/
    createStreamKey(req: operations.CreateStreamKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamKeyResponse>;
    /**
     * deleteChannel - <p>Deletes the specified channel and its associated stream keys.</p> <p>If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call <a>StopStream</a>, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state was changed from Live to Offline), then call DeleteChannel. (See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html"> Using EventBridge with Amazon IVS</a>.) </p>
    **/
    deleteChannel(req: operations.DeleteChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    /**
     * deletePlaybackKeyPair - Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
    **/
    deletePlaybackKeyPair(req: operations.DeletePlaybackKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.DeletePlaybackKeyPairResponse>;
    /**
     * deleteRecordingConfiguration - <p>Deletes the recording configuration for the specified ARN.</p> <p>If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use <a>UpdateChannel</a> to set the <code>recordingConfigurationArn</code> field to an empty string, then use DeleteRecordingConfiguration.</p>
    **/
    deleteRecordingConfiguration(req: operations.DeleteRecordingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingConfigurationResponse>;
    /**
     * deleteStreamKey - Deletes the stream key for the specified ARN, so it can no longer be used to stream.
    **/
    deleteStreamKey(req: operations.DeleteStreamKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStreamKeyResponse>;
    /**
     * getChannel - Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.
    **/
    getChannel(req: operations.GetChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelResponse>;
    /**
     * getPlaybackKeyPair - Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
    **/
    getPlaybackKeyPair(req: operations.GetPlaybackKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaybackKeyPairResponse>;
    /**
     * getRecordingConfiguration - Gets the recording configuration for the specified ARN.
    **/
    getRecordingConfiguration(req: operations.GetRecordingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordingConfigurationResponse>;
    /**
     * getStream - Gets information about the active (live) stream on a specified channel.
    **/
    getStream(req: operations.GetStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamResponse>;
    /**
     * getStreamKey - Gets stream-key information for a specified ARN.
    **/
    getStreamKey(req: operations.GetStreamKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamKeyResponse>;
    /**
     * importPlaybackKeyPair - Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
    **/
    importPlaybackKeyPair(req: operations.ImportPlaybackKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.ImportPlaybackKeyPairResponse>;
    /**
     * listChannels - Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).
    **/
    listChannels(req: operations.ListChannelsRequest, config?: AxiosRequestConfig): Promise<operations.ListChannelsResponse>;
    /**
     * listPlaybackKeyPairs - Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
    **/
    listPlaybackKeyPairs(req: operations.ListPlaybackKeyPairsRequest, config?: AxiosRequestConfig): Promise<operations.ListPlaybackKeyPairsResponse>;
    /**
     * listRecordingConfigurations - Gets summary information about all recording configurations in your account, in the AWS region where the API request is processed.
    **/
    listRecordingConfigurations(req: operations.ListRecordingConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRecordingConfigurationsResponse>;
    /**
     * listStreamKeys - Gets summary information about stream keys for the specified channel.
    **/
    listStreamKeys(req: operations.ListStreamKeysRequest, config?: AxiosRequestConfig): Promise<operations.ListStreamKeysResponse>;
    /**
     * listStreams - Gets summary information about live streams in your account, in the AWS region where the API request is processed.
    **/
    listStreams(req: operations.ListStreamsRequest, config?: AxiosRequestConfig): Promise<operations.ListStreamsResponse>;
    /**
     * putMetadata - Inserts metadata into the active stream of the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.
    **/
    putMetadata(req: operations.PutMetadataRequest, config?: AxiosRequestConfig): Promise<operations.PutMetadataResponse>;
    /**
     * stopStream - <p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> <note> <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the <code>streamKey</code> attached to the channel.</p> </note>
    **/
    stopStream(req: operations.StopStreamRequest, config?: AxiosRequestConfig): Promise<operations.StopStreamResponse>;
    /**
     * tagResource - Adds or updates tags for the AWS resource with the specified ARN.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from the resource with the specified ARN.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateChannel - Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.
    **/
    updateChannel(req: operations.UpdateChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChannelResponse>;
}
export {};
