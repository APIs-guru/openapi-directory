import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
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
     * createCustomerServiceMetricTask - Use this method to create a customer service metrics download task with filter criteria for the customer service metrics report. When using this method, specify the feedType and filterCriteria including both evaluationMarketplaceId and customerServiceMetricType for the report. The method returns the location response header containing the call URI to use with getCustomerServiceMetricTask to retrieve status and details on the task. Only CURRENT Customer Service Metrics reports can be generated with the Sell Feed API. PROJECTED reports are not supported at this time. See the getCustomerServiceMetric method document in the Analytics API for more information about these two types of reports. Note: Before calling this API, retrieve the summary of the seller's performance and rating for the customer service metric by calling getCustomerServiceMetric (part of the Analytics API). You can then populate the create task request fields with the values from the response. This technique eliminates failed tasks that request a report for a customerServiceMetricType and evaluationMarketplaceId that are without evaluation.
    **/
    createCustomerServiceMetricTask(req: operations.CreateCustomerServiceMetricTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomerServiceMetricTaskResponse>;
    /**
     * createInventoryTask - This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the feedType. This method returns the location response header containing the getInventoryTask call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task. To retrieve the status of the task, use the getInventoryTask method to retrieve a single task ID or the getInventoryTasks method to retrieve multiple task IDs. Note: The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.Presently, this method supports Active Inventory Report. The ActiveInventoryReport returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.
    **/
    createInventoryTask(req: operations.CreateInventoryTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateInventoryTaskResponse>;
    /**
     * createOrderTask - This method creates an order download task with filter criteria for the order report. When using this method, specify the feedType, schemaVersion, and filterCriteria for the report. The method returns the location response header containing the getOrderTask call URI to retrieve the order task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the order task. To retrieve the status of the task, use the getOrderTask method to retrieve a single task ID or the getOrderTasks method to retrieve multiple order task IDs. Note: The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified. The following list contains this method's authorization scope and its corresponding feed type: https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_REPORT For details about how this method is used, see General feed types in the Selling Integration Guide. Note: At this time, the createOrderTask method only supports order creation date filters and not modified order date filters. Do not include the modifiedDateRange filter in your request payload.
    **/
    createOrderTask(req: operations.CreateOrderTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrderTaskResponse>;
    /**
     * createSchedule - This method creates a schedule, which is a subscription to the specified schedule template. A schedule periodically generates a report for the feedType specified by the template. Specify the same feedType as the feedType of the associated schedule template. When creating the schedule, if available from the template, you can specify a preferred trigger hour, day of the week, or day of the month. These and other fields are conditionally available as specified by the template. Note: Make sure to include all fields required by the schedule template (scheduleTemplateId). Call the getScheduleTemplate method (or the getScheduleTemplates method), to find out which fields are required or optional. If a field is optional and a default value is provided by the template, the default value will be used if omitted from the payload.A successful call returns the location response header containing the getSchedule call URI to retrieve the schedule you just created. The URL includes the eBay-assigned schedule ID, which you can use to reference the schedule task. To retrieve the details of the create schedule task, use the getSchedule method for a single schedule ID or the getSchedules method to retrieve all schedule details for the specified feed_type. The number of schedules for each feedType is limited. Error code 160031 is returned when you have reached this maximum. Note: Except for schedules with a HALF-HOUR frequency, all schedules will ideally run at the start of each hour ('00' minutes). Actual start time may vary time may vary due to load and other factors.
    **/
    createSchedule(req: operations.CreateScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateScheduleResponse>;
    /**
     * createTask - This method creates an upload task or a download task without filter criteria. When using this method, specify the feedType and the feed file schemaVersion. The feed type specified sets the task as a download or an upload task. For details about the upload and download flows, see Working with Order Feeds in the Selling Integration Guide. Note: The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified. The following list contains this method's authorization scopes and their corresponding feed types: https://api.ebay.com/oauth/api_scope/sell.inventory: See LMS FeedTypes https://api.ebay.com/oauth/api_scope/sell.fulfillment: LMS_ORDER_ACK (specify for upload tasks). Also see LMS FeedTypes https://api.ebay.com/oauth/api_scope/sell.marketing: None* https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly: None* * Reserved for future release
    **/
    createTask(req: operations.CreateTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    /**
     * deleteSchedule - This method deletes an existing schedule. Specify the schedule to delete using the schedule_id path parameter.
    **/
    deleteSchedule(req: operations.DeleteScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScheduleResponse>;
    /**
     * getCustomerServiceMetricTask - Use this method to retrieve customer service metric task details for the specified task. The input is task_id.
    **/
    getCustomerServiceMetricTask(req: operations.GetCustomerServiceMetricTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerServiceMetricTaskResponse>;
    /**
     * getCustomerServiceMetricTasks - Use this method to return an array of customer service metric tasks. You can limit the tasks returned by specifying a date range. Note: You can pass in either the look_back_days or date_range, but not both.
    **/
    getCustomerServiceMetricTasks(req: operations.GetCustomerServiceMetricTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerServiceMetricTasksResponse>;
    /**
     * getInputFile - This method downloads the file previously uploaded using uploadFile. Specify the task_id from the uploadFile call. Note: With respect to LMS, this method applies to all feed types except LMS_ORDER_REPORT and LMS_ACTIVE_INVENTORY_REPORT. See LMS API Feeds in the Selling Integration Guide.
    **/
    getInputFile(req: operations.GetInputFileRequest, config?: AxiosRequestConfig): Promise<operations.GetInputFileResponse>;
    /**
     * getInventoryTask - This method retrieves the task details and status of the specified inventory-related task. The input is task_id.
    **/
    getInventoryTask(req: operations.GetInventoryTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetInventoryTaskResponse>;
    /**
     * getInventoryTasks - This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.
    **/
    getInventoryTasks(req: operations.GetInventoryTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetInventoryTasksResponse>;
    /**
     * getLatestResultFile - This method downloads the latest result file generated by the schedule. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). Specify the schedule_id path parameter to download its last generated file.
    **/
    getLatestResultFile(req: operations.GetLatestResultFileRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestResultFileResponse>;
    /**
     * getOrderTask - This method retrieves the task details and status of the specified task. The input is task_id. For details about how this method is used, see Working with Order Feeds in the Selling Integration Guide.
    **/
    getOrderTask(req: operations.GetOrderTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderTaskResponse>;
    /**
     * getOrderTasks - This method returns the details and status for an array of order tasks based on a specified feed_type or schedule_id. Specifying both feed_type and schedule_id results in an error. Since schedules are based on feed types, you can specify a schedule (schedule_id) that returns the needed feed_type. If specifying the feed_type, limit which order tasks are returned by specifying filters such as the creation date range or period of time using look_back_days. If specifying a schedule_id, the schedule template (that the schedule_id is based on) determines which order tasks are returned (see schedule_id for additional information). Each schedule_id applies to one feed_type.
    **/
    getOrderTasks(req: operations.GetOrderTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderTasksResponse>;
    /**
     * getResultFile - This method retrieves the generated file that is associated with the specified task ID. The response of this call is a compressed or uncompressed CSV, XML, or JSON file, with the applicable file extension (for example: csv.gz). For details about how this method is used, see Working with Order Feeds in the Selling Integration Guide. Note: The status of the task to retrieve must be in the COMPLETED or COMPLETED_WITH_ERROR state before this method can retrieve the file. You can use the getTask or getTasks method to retrieve the status of the task.
    **/
    getResultFile(req: operations.GetResultFileRequest, config?: AxiosRequestConfig): Promise<operations.GetResultFileResponse>;
    /**
     * getSchedule - This method retrieves schedule details and status of the specified schedule. Specify the schedule to retrieve using the schedule_id. Use the getSchedules method to find a schedule if you do not know the schedule_id.
    **/
    getSchedule(req: operations.GetScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduleResponse>;
    /**
     * getScheduleTemplate - This method retrieves the details of the specified template. Specify the template to retrieve using the schedule_template_id path parameter. Use the getScheduleTemplates method to find a schedule template if you do not know the schedule_template_id.
    **/
    getScheduleTemplate(req: operations.GetScheduleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduleTemplateResponse>;
    /**
     * getScheduleTemplates - This method retrieves an array containing the details and status of all schedule templates based on the specified feed_type. Use this method to find a schedule template if you do not know the schedule_template_id.
    **/
    getScheduleTemplates(req: operations.GetScheduleTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduleTemplatesResponse>;
    /**
     * getSchedules - This method retrieves an array containing the details and status of all schedules based on the specified feed_type. Use this method to find a schedule if you do not know the schedule_id.
    **/
    getSchedules(req: operations.GetSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesResponse>;
    /**
     * getTask - This method retrieves the details and status of the specified task. The input is task_id. For details of how this method is used, see Working with Order Feeds in the Selling Integration Guide.
    **/
    getTask(req: operations.GetTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskResponse>;
    /**
     * getTasks - This method returns the details and status for an array of tasks based on a specified feed_type or scheduledId. Specifying both feed_type and scheduledId results in an error. Since schedules are based on feed types, you can specify a schedule (schedule_id) that returns the needed feed_type. If specifying the feed_type, limit which tasks are returned by specifying filters, such as the creation date range or period of time using look_back_days. Also, by specifying the feed_type, both on-demand and scheduled reports are returned. If specifying a scheduledId, the schedule template (that the schedule ID is based on) determines which tasks are returned (see schedule_id for additional information). Each scheduledId applies to one feed_type.
    **/
    getTasks(req: operations.GetTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksResponse>;
    /**
     * updateSchedule - This method updates an existing schedule. Specify the schedule to update using the schedule_id path parameter. If the schedule template has changed after the schedule was created or updated, the input will be validated using the changed template. Note: Make sure to include all fields required by the schedule template (scheduleTemplateId). Call the getScheduleTemplate method (or the getScheduleTemplates method), to find out which fields are required or optional. If you do not know the scheduleTemplateId, call the getSchedule method to find out.
    **/
    updateSchedule(req: operations.UpdateScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScheduleResponse>;
    /**
     * uploadFile - This method associates the specified file with the specified task ID and uploads the input file. After the file has been uploaded, the processing of the file begins. Reports often take time to generate and it's common for this method to return an HTTP status of 202, which indicates the report is being generated. Use the getTask with the task ID or getTasks to determine the status of a report. The status flow is QUEUED &gt; IN_PROCESS &gt; COMPLETED or COMPLETED_WITH_ERROR. When the status is COMPLETED or COMPLETED_WITH_ERROR, this indicates the file has been processed and the order report can be downloaded. If there are errors, they will be indicated in the report file. For details of how this method is used in the upload flow, see Working with Order Feeds in the Selling Integration Guide. Note: This method applies to all File Exchange feed types and LMS feed types except LMS_ORDER_REPORT and LMS_ACTIVE_INVENTORY_REPORT. See LMS API Feeds in the Selling Integration Guide and File Exchange FeedTypes in the File Exchange Migration Guide. Note: You must use a Content-Type header with its value set to &quot;multipart/form-data&quot;. See Samples for information.
    **/
    uploadFile(req: operations.UploadFileRequest, config?: AxiosRequestConfig): Promise<operations.UploadFileResponse>;
}
export {};
