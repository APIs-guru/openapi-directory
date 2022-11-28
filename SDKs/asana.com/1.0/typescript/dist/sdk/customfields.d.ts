import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createCustomField - Create a custom field
     *
     * Creates a new custom field in a workspace. Every custom field is required
     * to be created in a specific workspace, and this workspace cannot be
     * changed once set.
     *
     * A custom field’s name must be unique within a workspace and not conflict
     * with names of existing task properties such as ‘Due Date’ or ‘Assignee’.
     * A custom field’s type must be one of ‘text’, ‘enum’, or ‘number’.
     *
     * Returns the full record of the newly created custom field.
    **/
    createCustomField(req: operations.CreateCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomFieldResponse>;
    /**
     * createEnumOptionForCustomField - Create an enum option
     *
     * Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 50 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list.
     * Locked custom fields can only have enum options added by the user who locked the field.
     * Returns the full record of the newly created enum option.
    **/
    createEnumOptionForCustomField(req: operations.CreateEnumOptionForCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnumOptionForCustomFieldResponse>;
    /**
     * deleteCustomField - Delete a custom field
     *
     * A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.
     * Locked custom fields can only be deleted by the user who locked the field.
     * Returns an empty data record.
    **/
    deleteCustomField(req: operations.DeleteCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomFieldResponse>;
    /**
     * getCustomField - Get a custom field
     *
     * Get the complete definition of a custom field’s metadata.
     *
     * Since custom fields can be defined for one of a number of types, and
     * these types have different data and behaviors, there are fields that are
     * relevant to a particular type. For instance, as noted above, enum_options
     * is only relevant for the enum type and defines the set of choices that
     * the enum could represent. The examples below show some of these
     * type-specific custom field definitions.
    **/
    getCustomField(req: operations.GetCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldResponse>;
    /**
     * getCustomFieldsForWorkspace - Get a workspace's custom fields
     *
     * Returns a list of the compact representation of all of the custom fields in a workspace.
    **/
    getCustomFieldsForWorkspace(req: operations.GetCustomFieldsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsForWorkspaceResponse>;
    /**
     * insertEnumOptionForCustomField - Reorder a custom field's enum
     *
     * Moves a particular enum option to be either before or after another specified enum option in the custom field.
     * Locked custom fields can only be reordered by the user who locked the field.
    **/
    insertEnumOptionForCustomField(req: operations.InsertEnumOptionForCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.InsertEnumOptionForCustomFieldResponse>;
    /**
     * updateCustomField - Update a custom field
     *
     * A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged
     * When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.
     * A custom field’s `type` cannot be updated.
     * An enum custom field’s `enum_options` cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update `enum_options`.
     * Locked custom fields can only be updated by the user who locked the field.
     * Returns the complete updated custom field record.
    **/
    updateCustomField(req: operations.UpdateCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomFieldResponse>;
    /**
     * updateEnumOption - Update an enum option
     *
     * Updates an existing enum option. Enum custom fields require at least one enabled enum option.
     * Locked custom fields can only be updated by the user who locked the field.
     * Returns the full record of the updated enum option.
    **/
    updateEnumOption(req: operations.UpdateEnumOptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnumOptionResponse>;
}
