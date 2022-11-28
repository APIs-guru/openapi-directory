# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AddFieldsToTemplateRequest(
    security=operations.AddFieldsToTemplateSecurity(
        api_token_basic=shared.SchemeAPITokenBasic(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.AddFieldsToTemplatePathParams(
        template_id="officiis",
    ),
    request=operations.AddFieldsToTemplateAddFieldsData(
        fields=[
            operations.AddFieldsToTemplateAddFieldsDataFields(
                alignment="right",
                auto_calculate_max_length=False,
                background_color="enim",
                background_color_field_name="sint",
                background_color_field_required=False,
                barcode_symbology="exercitationem",
                bold=False,
                character_spacing=79.199997,
                check_character="&#10004;",
                check_color="ex",
                check_color_field_name="ex",
                check_color_field_required=True,
                color="consequuntur",
                color_field_name="et",
                color_field_required=False,
                comb=False,
                comb_number_of_cells=69.099998,
                comb_value_offset=22.100000,
                combined_field_format="temporibus",
                combined_field_names="et",
                combined_field_separator="vitae",
                combined_field_type="qui",
                condition="necessitatibus",
                currency=True,
                date_time_format="itaque",
                decimal_places=60.099998,
                default="harum",
                description="est",
                display_type="text",
                exclusive_maximum=False,
                exclusive_minimum=False,
                false_text="sit",
                font_size=99.199997,
                height=15.100000,
                hidden=False,
                id=31.200001,
                image_gravity="Center",
                image_scale_type="fit",
                include_time=False,
                integer=True,
                invert_boolean_condition=True,
                max_length=9.100000,
                maximum=33.099998,
                metadata="sit",
                min_length=34.200001,
                minimum=81.099998,
                multiline=False,
                multiline_lines=87.199997,
                name="excepturi",
                number_condition_range_exclusive_max=False,
                number_condition_range_exclusive_min=True,
                number_condition_range_max=15.200000,
                number_condition_range_min=91.099998,
                number_condition_type="range",
                opacity=1.200000,
                option_list="perspiciatis",
                overflow="truncate",
                page=94.199997,
                qrcode_color="eum",
                qrcode_color_field_name="totam",
                qrcode_color_field_required=True,
                required=True,
                rotation=49.200001,
                shape_border_color="ea",
                shape_border_color_field_name="omnis",
                shape_border_color_field_required=False,
                shape_border_width=73.099998,
                shape_fill_color="et",
                shape_fill_color_field_name="nostrum",
                shape_fill_color_field_required=True,
                shape_type="circle",
                signature_allow_draw=False,
                signature_allow_type=True,
                static=False,
                strikethrough=False,
                string_condition_type="contains",
                title="occaecati",
                true_text="et",
                type="address",
                typeface="doloribus",
                uppercase=False,
                v_alignment="bottom",
                width=98.199997,
                x=21.100000,
                y=33.099998,
            ),
            operations.AddFieldsToTemplateAddFieldsDataFields(
                alignment="right",
                auto_calculate_max_length=True,
                background_color="a",
                background_color_field_name="minima",
                background_color_field_required=True,
                barcode_symbology="ducimus",
                bold=True,
                character_spacing=72.199997,
                check_character="&#10003;",
                check_color="est",
                check_color_field_name="voluptas",
                check_color_field_required=False,
                color="repudiandae",
                color_field_name="maxime",
                color_field_required=False,
                comb=True,
                comb_number_of_cells=85.199997,
                comb_value_offset=19.200001,
                combined_field_format="aut",
                combined_field_names="aut",
                combined_field_separator="possimus",
                combined_field_type="qui",
                condition="accusamus",
                currency=False,
                date_time_format="molestiae",
                decimal_places=53.099998,
                default="quae",
                description="voluptatum",
                display_type="text",
                exclusive_maximum=False,
                exclusive_minimum=False,
                false_text="molestias",
                font_size=20.200001,
                height=32.200001,
                hidden=True,
                id=76.099998,
                image_gravity="East",
                image_scale_type="stretch",
                include_time=True,
                integer=False,
                invert_boolean_condition=True,
                max_length=64.199997,
                maximum=18.200001,
                metadata="vel",
                min_length=99.199997,
                minimum=1.200000,
                multiline=True,
                multiline_lines=30.200001,
                name="ut",
                number_condition_range_exclusive_max=False,
                number_condition_range_exclusive_min=True,
                number_condition_range_max=57.099998,
                number_condition_range_min=47.099998,
                number_condition_type="gt",
                opacity=16.200001,
                option_list="sit",
                overflow="truncate",
                page=61.200001,
                qrcode_color="nesciunt",
                qrcode_color_field_name="ea",
                qrcode_color_field_required=False,
                required=True,
                rotation=49.099998,
                shape_border_color="accusamus",
                shape_border_color_field_name="magni",
                shape_border_color_field_required=False,
                shape_border_width=10.100000,
                shape_fill_color="labore",
                shape_fill_color_field_name="maiores",
                shape_fill_color_field_required=False,
                shape_type="ellipse",
                signature_allow_draw=False,
                signature_allow_type=True,
                static=False,
                strikethrough=True,
                string_condition_type="ends_with",
                title="eveniet",
                true_text="doloremque",
                type="email",
                typeface="eligendi",
                uppercase=False,
                v_alignment="center",
                width=72.199997,
                x=38.200001,
                y=70.199997,
            ),
            operations.AddFieldsToTemplateAddFieldsDataFields(
                alignment="center",
                auto_calculate_max_length=True,
                background_color="voluptatum",
                background_color_field_name="delectus",
                background_color_field_required=True,
                barcode_symbology="perferendis",
                bold=False,
                character_spacing=6.200000,
                check_character="&#10003;",
                check_color="sed",
                check_color_field_name="quae",
                check_color_field_required=False,
                color="aut",
                color_field_name="cum",
                color_field_required=True,
                comb=False,
                comb_number_of_cells=91.199997,
                comb_value_offset=36.099998,
                combined_field_format="rerum",
                combined_field_names="deserunt",
                combined_field_separator="blanditiis",
                combined_field_type="a",
                condition="in",
                currency=False,
                date_time_format="tenetur",
                decimal_places=75.199997,
                default="aperiam",
                description="corrupti",
                display_type="shape",
                exclusive_maximum=False,
                exclusive_minimum=True,
                false_text="cum",
                font_size=35.099998,
                height=46.099998,
                hidden=False,
                id=95.199997,
                image_gravity="Center",
                image_scale_type="fill",
                include_time=False,
                integer=False,
                invert_boolean_condition=True,
                max_length=38.200001,
                maximum=29.100000,
                metadata="mollitia",
                min_length=83.199997,
                minimum=95.199997,
                multiline=False,
                multiline_lines=54.099998,
                name="odit",
                number_condition_range_exclusive_max=True,
                number_condition_range_exclusive_min=False,
                number_condition_range_max=19.200001,
                number_condition_range_min=36.099998,
                number_condition_type="gt",
                opacity=35.099998,
                option_list="eos",
                overflow="shrink_to_fit",
                page=15.100000,
                qrcode_color="ipsam",
                qrcode_color_field_name="velit",
                qrcode_color_field_required=False,
                required=False,
                rotation=12.200000,
                shape_border_color="et",
                shape_border_color_field_name="inventore",
                shape_border_color_field_required=True,
                shape_border_width=57.099998,
                shape_fill_color="pariatur",
                shape_fill_color_field_name="quia",
                shape_fill_color_field_required=False,
                shape_type="circle",
                signature_allow_draw=True,
                signature_allow_type=False,
                static=True,
                strikethrough=True,
                string_condition_type="regex",
                title="quia",
                true_text="eos",
                type="barcode",
                typeface="id",
                uppercase=False,
                v_alignment="top",
                width=22.100000,
                x=35.200001,
                y=45.099998,
            ),
        ],
    ),
)
    
res = s.sdk.add_fields_to_template(req)

if res.add_fields_template_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_fields_to_template` - Add new fields to a Template
* `batch_generate_pdf_v1` - Generates multiple PDFs
* `batch_generate_pdfs` - Generates multiple PDFs
* `combine_pdfs` - Merge submission PDFs, template PDFs, or custom files
* `combine_submissions` - Merge generated PDFs together
* `copy_template` - Copy a Template
* `create_custom_file_from_upload` - Create a new custom file from a cached presign upload
* `create_data_request_token` - Creates a new data request token for form authentication
* `create_folder` - Create a folder
* `create_html_template` - Create a new HTML template
* `create_pdf_template` - Create a new PDF template with a form POST file upload
* `create_pdf_template_from_upload` - Create a new PDF template from a cached presign upload
* `delete_folder` - Delete a folder
* `expire_combined_submission` - Expire a combined submission
* `expire_submission` - Expire a PDF submission
* `generate_pdf` - Generates a new PDF
* `get_combined_submission` - Check the status of a combined submission (merged PDFs)
* `get_data_request` - Look up a submission data request
* `get_presign_url` - Get a presigned URL so that you can upload a file to our AWS S3 bucket
* `get_submission` - Check the status of a PDF
* `get_submission_batch` - Check the status of a submission batch job
* `get_template` - Get a single template
* `get_template_schema` - Fetch the JSON schema for a template
* `list_folders` - Get a list of all folders
* `list_templates` - Get a list of all templates
* `move_folder_to_folder` - Move a folder
* `move_template_to_folder` - Move Template to folder
* `rename_folder` - Rename a folder
* `test_authentication` - Test Authentication
* `update_data_request` - Update a submission data request
* `update_template` - Update a Template

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
